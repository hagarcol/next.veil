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
    },
    input_value: null | number,
    input_label: null | number,
    output_value: null | number,
    output_label: null | number
  };
  extra: {
    open: boolean,
    type: 'locked' | 'coming-soon'
  }
}