export interface Dapp {
  id: string;
  network?: string[];
  name: string;
  description: string;
  iconUrl: string;
  linkUrl: string;
}

export interface DappsData {
  dapps: Dapp[];
  favoriteIds: string[];
}
