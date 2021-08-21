export default {
  SET_ISLOADING(state, status) {
    state.isLoading = status
  },
  SET_IS_MOBILE(state, isMobile) {
    state.isMobile = isMobile
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  SET_SITE_DATA(state, site_data) {
    state.site_data = site_data
    if (site_data) {
      document.title = site_data.title
    }
  },
  TOGGLE_SIGNIN_FORM(state) {
    state.showSigninForm = !state.showSigninForm
  },
  SET_ACCESS_TOKEN(state, token) {
    state.access_token = token
  },
  SET_USER(state, user) {
    state.user = user
  }
}
