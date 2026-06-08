-- Supabase migration: waitlist_signups table
-- Run this in the Supabase SQL editor or via CLI

-- Enable citext extension for case-insensitive emails
create extension if not exists citext;

-- Create the waitlist table
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email citext not null unique,
  consent boolean not null check (consent = true),
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  ip_hash text,
  user_agent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Indexes
create index if not exists idx_waitlist_email on public.waitlist_signups (email);
create index if not exists idx_waitlist_created_at on public.waitlist_signups (created_at desc);

-- Updated_at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists set_updated_at on public.waitlist_signups;
create trigger set_updated_at
  before update on public.waitlist_signups
  for each row
  execute function public.handle_updated_at();

-- Enable Row Level Security
alter table public.waitlist_signups enable row level security;

-- No policies for anon — only service_role can access
-- The API route uses SUPABASE_SERVICE_ROLE_KEY, which bypasses RLS
-- This ensures no client-side access to waitlist data

-- Comment
comment on table public.waitlist_signups is 'Waitlist signups for PlexusBeam marketing site. Only accessible via service_role key.';
