import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> {
  navigation: NativeStackScreenProps<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type AuthRoutes = {
  Onboarding: undefined;
};
