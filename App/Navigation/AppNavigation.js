import { createStackNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator as createStackNavigatorNew } from 'react-navigation-stack'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigatorNew({
  LaunchScreen: { screen: LaunchScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
