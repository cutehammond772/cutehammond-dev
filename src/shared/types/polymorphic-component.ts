type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type PolymorphicComponentProps<C extends React.ElementType, Props = {}> =
  // 1. Component가 원래 가지고 있던 Properties
  Omit<React.ComponentProps<C>, keyof Props | keyof AsProp<C>> &
    // 2. "as" Property
    AsProp<C> &
    // 3. 추가로 정의된 Properties
    Props;
