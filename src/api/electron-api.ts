// https://mokkapps.de/blog/building-a-vue-3-desktop-app-with-pinia-electron-and-quasar/

export interface ElectronApi {
  testMeAsync: () => Promise<void>;

  maximize: () => void;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const electronApi: ElectronApi = (window as { electronApi: ElectronApi })
  .electronApi;
