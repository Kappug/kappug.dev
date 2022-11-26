export enum Opcode {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

export enum Event {
  INIT_STATE = "INIT_STATE",
  PRESENCE_UPDATE = "PRESENCE_UPDATE",
}

export interface Message {
  op: Opcode;
  t?: Event;
  d: Data;
}

export interface Data extends Presence {
  heartbeat_interval?: number;
}

export interface HydratedPresence {
  hydrated: boolean;
  presence?: Presence;
}

export interface Presence {
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_web: boolean;
  activities: Activity[];
  discord_status: string;
  discord_user: User;
  kv: Record<string, string>;
  listening_to_spotify: boolean;
  spotify?: Spotify;
}

export interface Spotify {
  track_id: string;
  timestamps: Timestamps;
  song: string;
  artist: string;
  album_art_url: string;
  album: string;
}

export interface Timestamps {
  start: number;
  end: number;
}

export interface User {
  avatar: string;
  bot: boolean;
  id: Snowflake;
  discriminator: string;
  public_flags: number;
  username: string;
}

export type Snowflake = `${bigint}`;

export interface Activity {
  type: number;
  state: string;
  name: string;
  id: string;
  emoji?: Emoji;
  created_at: number;
  timestamps?: Timestamps;
  sync_id?: string;
  session_id?: string;
  party?: Party;
  flags?: number;
  details?: string;
  assets?: Assets;
  application_id?: Snowflake;
}

export interface Emoji {
  name: string;
  id: Snowflake;
  animated: boolean;
}

export interface Party {
  id: Snowflake;
}

export interface Assets {
  small_text: string;
  small_image: string;
  large_text: string;
  large_image: string;
}
