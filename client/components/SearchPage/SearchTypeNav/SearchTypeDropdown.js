import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class SearchTypeDropdown extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = { open: false }
  }

  toggle() {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render() {
    const { t, searchTypes, activeType, changeType } = this.props
    return (
      <Dropdown className="d-sm-none" isOpen={this.state.open} toggle={this.toggle}>
        <DropdownToggle className="ml-auto d-block" caret>
          {t('page_type')}
        </DropdownToggle>
        <DropdownMenu right>
          {searchTypes.map(({ key, icon, name }) => (
            <DropdownItem key={key} onClick={() => changeType(key)} active={key === activeType.key}>
              {icon}
              {name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    )
  }
}

SearchTypeDropdown.propTypes = {
  t: PropTypes.func.isRequired,
  searchTypes: PropTypes.array.isRequired,
  activeType: PropTypes.object.isRequired,
  changeType: PropTypes.func.isRequired,
}
SearchTypeDropdown.defaultProps = {}

export default translate()(SearchTypeDropdown)