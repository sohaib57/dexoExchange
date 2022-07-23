import React from 'react'
import styled from 'styled-components'
import { ChartIcon, Flex, Heading, HistoryIcon, IconButton, NotificationDot, Text, useModal } from '@pancakeswap/uikit'
import TransactionsModal from 'components/App/Transactions/TransactionsModal'
import GlobalSettings from 'components/Menu/GlobalSettings'
import { useExpertModeManager } from 'state/user/hooks'

interface Props {
  title: string
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
}

const CurrencyInputContainer = styled(Flex)`
  align-items: center;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  width: 100%;
`

const CurrencyInputHeader: React.FC<Props> = ({ title, subtitle, setIsChartDisplayed }) => {
  const [expertMode] = useExpertModeManager()
  const toggleChartDisplayed = () => {
    setIsChartDisplayed((currentIsChartDisplayed) => !currentIsChartDisplayed)
  }
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)

  return (
    <>
     <Flex width="100%" justifyContent="flex-end" px="2.5rem" pt="2.5rem">
          <NotificationDot show={expertMode}>
            <GlobalSettings color="#a1a5ad" mr="0" />
          </NotificationDot>
          <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
            <HistoryIcon color="#67738b" width="1.6rem" />
          </IconButton>
        </Flex>
    <CurrencyInputContainer>
      <Flex width="100%"  justifyContent="center" >

        <Flex flexDirection="column" alignItems="center">
          <Text lineHeight="1.2" fontWeight="bold" fontSize="3rem" mb="5px">
            {title}
          </Text>
          <Flex alignItems="center">
            <Text color="textSubtle" fontSize="1.1rem">
              {subtitle}
            </Text>
          </Flex>
        </Flex>
       
      </Flex>
    </CurrencyInputContainer>
    </>
  )
}

export default CurrencyInputHeader
