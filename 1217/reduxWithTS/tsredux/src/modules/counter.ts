const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

export const increase = () => ({ type: INCREASE, payload: "b" });
export const decrease = () => ({ type: DECREASE, payload: 1 });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>; //타입을 갖고 인터페이스를 만든다. as const를 붙임으로써 타입이 string에서 'counter.INCREASE' 이런 식으로 변함

type CounterState = {
  count: number;
};
const initialState: CounterState = {
  count: 0,
};

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}
export default counter;