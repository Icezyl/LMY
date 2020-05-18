const actions = {
  async setNossv (context, data) {
    await context.commit('setNossv', data)
  }
}
export default actions
