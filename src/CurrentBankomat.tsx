import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            <Banknote color={props.money.banknotes === 'Dollars' ? 'blue' : 'green'  }>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
            </Banknote>


            {/*{props.money.banknotes === 'Dollars'*/}
            {/*    ? <BanknotGreen>*/}
            {/*        <div>{props.money.banknotes}</div>*/}
            {/*        <div>{props.money.value}</div>*/}
            {/*        <div>{props.money.number}</div>*/}
            {/*    </BanknotGreen>*/}
            {/*    : <BanknotBlue>*/}
            {/*        <div>{props.money.banknotes}</div>*/}
            {/*        <div>{props.money.value}</div>*/}
            {/*        <div>{props.money.number}</div>*/}
            {/*    </BanknotBlue>*/}
            {/*}*/}
        </>
    );
};

const Banknote = styled.div`
  background: ${props => {
    if (props.color === 'blue') {
      return 'chartreuse'
    } else {
      return '#61dafb'
    }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`

// const BanknotGreen = styled.div`
//   background: chartreuse;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const BanknotBlue = styled.div`
//   background: #61dafb;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `