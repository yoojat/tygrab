import { StackNavigator } from "react-navigation";
import LogInScreen from "../screens/LogInScreen";

const LoggedOutNavigation = StackNavigator({
  LogIn: {
    screen: LogInScreen,
    navigationOptions: {
      header: null //헤더로 표시됨
    }
  }
});

export default LoggedOutNavigation;
