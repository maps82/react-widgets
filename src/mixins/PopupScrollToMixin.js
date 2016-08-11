import scrollTo from 'dom-helpers/util/scrollTo';

export default {

  _scrollTo(selected, list, focused, scrollToTop = false) {
    var state   = this._scrollState || (this._scrollState = {})
      , handler = this.props.onMove
      , lastVisible = state.visible
      , lastItem    = state.focused
      , shown, changed;

    state.visible = !(!list.offsetWidth || !list.offsetHeight)
    state.focused = focused

    changed = lastItem !== focused
    shown   = state.visible && !lastVisible

    if ( shown || (state.visible && changed) ){
      if ( handler )
        handler(selected, list, focused)
      else {
        state.scrollCancel && state.scrollCancel()
        state.scrollCancel = scrollTo(selected, list, scrollToTop)
      }
    }
  }
}
