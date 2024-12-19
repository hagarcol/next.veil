export interface RootState {
  crypto: {
    isLoading: boolean;
    error: null | string;
    type: string,
    sender: {
      crypto: {
        img: string,
        name: string,
        subName: string,
      },
      amount: null | string
    },
    receiver: {
      crypto: {
        img: string,
        name: string,
        subName: string,
      },
      amount: null | string
    }
  };
  extra: {
    open: boolean,
    type: 'locked' | 'coming-soon'
  }
}