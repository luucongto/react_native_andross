import { put, select } from 'redux-saga/effects'
import { loginTokenSelector } from '../Redux/LoginRedux'
import StartupActions from '../Redux/StartupRedux'
// import { is } from 'ramda'
// import Utils from '../Containers/Utils'
// exported to make available for tests
// process STARTUP actions
export function * startup (api) {
  if (__DEV__ && console.tron) {
    // straight-up string logging

    // // logging an object for better clarity
    // Utils.log({
    //   message: 'pass objects for better logging',
    //   someGeneratorFunction: selectAvatar
    // })

    // fully customized!
    // const subObject = { a: 1, b: [1, 2, 3], c: true }
    // subObject.circularDependency = subObject // osnap!
    // console.tron.display({
    //   name: '🔥 IGNITE 🔥',
    //   preview: 'You should totally expand this',
    //   value: {
    //     '💃': 'Welcome to the future!',
    //     subObject,
    //     someInlineFunction: () => true,
    //     someGeneratorFunction: startup,
    //     someNormalFunction: selectAvatar
    //   }
    // })
  }
  // const avatar = yield select(selectAvatar)
  // // only get if we don't have it yet
  // if (!is(String, avatar)) {
  //   yield put(GithubActions.userRequest('GantMan'))
  // }
  const loginToken = yield select(loginTokenSelector)
  if (loginToken) { api.authenticated(loginToken) }
  yield put(StartupActions.startupSuccess(true))
}
