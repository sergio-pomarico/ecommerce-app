import {Product} from '@core/models/product';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> {
  navigation: NativeStackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type AuthRoutes = {
  Onboarding: undefined;
  SignUp: undefined;
  Login: undefined;
};

export type AppRoutes = {
  Home: undefined;
};

export type HomeRoutes = {
  List: undefined;
  Detail: {product: Product};
};
