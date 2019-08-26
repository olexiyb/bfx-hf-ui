import React from 'react'

import Panel from '../../ui/Panel'
import Table from '../../ui/Table'
import AlgoOrderTableColumns from './AlgoOrderTable.columns'
import { propTypes, defaultProps } from './AlgoOrderTable.props'

export default class AlgoOrderTable extends React.Component {
  static propTypes = propTypes

  static defaultProps = defaultProps

  state = {
    editorOpened: false,
  }


  shouldComponentUpdate(nextProps) {
    const newAlgoOrders = nextProps.algoOrders
    const { algoOrders } = this.props

    if (newAlgoOrders.length !== algoOrders.length) {
      return true
    }

    return JSON.stringify(newAlgoOrders) !== JSON.stringify(algoOrders)
  }

  onRowClick({ index } = {}) {
    const {
      onSelect, algoOrders,
    } = this.props
    onSelect(algoOrders[index])
  }

  render() {
    const { algoOrders } = this.props
    return (
      <Panel
        label='Algo Order Definitions'
        contentClassName='table__wrapper'
        style={{ height: '100%' }}
      >
        <Table
          data={algoOrders}
          columns={AlgoOrderTableColumns}
          maxWidth={850}
          defaultSortDirection='ASC'
        />

      </Panel>
    )
  }
}
