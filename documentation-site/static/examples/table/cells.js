import React from 'react';

import {styled} from 'baseui';
import {Block} from 'baseui/block';
import ArrowUp from 'baseui/icon/arrow-up';
import ArrowDown from 'baseui/icon/arrow-down';
import Search from 'baseui/icon/search';
import Plus from 'baseui/icon/plus';
import Delete from 'baseui/icon/delete';
import Overflow from 'baseui/icon/overflow';
import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell,
  StyledAction,
} from 'baseui/table';

const StyledHeadingCell = styled(StyledCell, {paddingTop: 0, paddingBottom: 0});

const StyledDeltaCell = styled(StyledCell, props => ({
  ...props.$theme.typography.font500,
  alignItems: 'center',
  backgroundColor: props.$isNegative
    ? props.$theme.colors.negative50
    : props.$theme.colors.positive50,
  color: props.$isNegative
    ? props.$theme.colors.negative
    : props.$theme.colors.positive,
}));

const StyledLargeText = styled(StyledCell, {
  alignItems: 'center',
});

const DATA = [
  ['Marlyn', 'Engineering', 'San Francisco', -100, 1234.5],
  ['Luther', 'Marketing', 'Seattle', 50, 2435.2],
  ['Kiera', 'Operations', 'Los Angeles', 40, 8348.1],
  ['Edna', 'Design', 'Atlanta', 700, 2893.4],
  ['Soraya', 'Finance', 'Denver', 99, 8787.3],
  ['Dorris', 'Legal', 'Dallas', -20, 6325.2],
  ['Astrid', 'Product', 'Tempe', 0, 7392.7],
  ['Wendie', 'Engineering', 'Pittsburgh', -15, 9283.1],
  ['Marna', 'Marketing', 'Indianapolis', -2, 7720.9],
  ['Malka', 'Operations', 'New Orleans', 30, 6273.3],
  ['Jospeh', 'Design', 'New York City', -22, 8837.4],
  ['Roselee', 'Finance', 'Oakland', 4, 9277.9],
  ['Justine', 'Legal', 'Louisville', -9, 7737.2],
  ['Marlon', 'Engineering', 'Baltimore', -2, 2330.3],
  ['Mellissa', 'Marketing', 'Boulder', -30, 4458.8],
  ['Fausto', 'Operations', 'Chicago', -10, 6363.9],
  ['Alfredia', 'Design', 'Grand Rapids', 70, 2235.2],
  ['Abel', 'Finance', 'Nashville', 30, 9882.3],
  ['Winford', 'Legal', 'Sacramento', 10, 8774.7],
  ['Neil', 'Product', 'Columbus', -5, 2673.2],
];

const Container = styled('div', {
  height: '400px',
});

export default () => (
  <Container>
    <StyledTable>
      <StyledHead $width="900px">
        <StyledHeadCell>Name</StyledHeadCell>
        <StyledHeadCell>Role</StyledHeadCell>
        <StyledHeadCell>Delta</StyledHeadCell>
        <StyledHeadCell>Amount</StyledHeadCell>
        <StyledHeadCell>Actions</StyledHeadCell>
      </StyledHead>
      <StyledBody $width="900px">
        {DATA.map((row, index) => (
          <StyledRow key={index}>
            <StyledCell>{row[0]}</StyledCell>

            <StyledHeadingCell>
              <Block>
                <Block font="font200" color="mono600">
                  {row[2]}
                </Block>
                <Block font="font300">{row[1]}</Block>
              </Block>
            </StyledHeadingCell>

            <StyledDeltaCell $isNegative={row[3] < 0}>
              <>
                {row[3] < 0 ? <ArrowDown size={24} /> : <ArrowUp size={24} />}
                {row[3]}%
              </>
            </StyledDeltaCell>

            <StyledLargeText>
              <Block font="font500">{row[4]}</Block>
              <Block color="mono700" font="font250" paddingLeft="scale200">
                +1000%
              </Block>
            </StyledLargeText>

            <StyledCell>
              <StyledAction>
                <Search />
              </StyledAction>

              <StyledAction>
                <Plus />
              </StyledAction>

              <StyledAction>
                <Delete />
              </StyledAction>

              <StyledAction>
                <Overflow />
              </StyledAction>
            </StyledCell>
          </StyledRow>
        ))}
      </StyledBody>
    </StyledTable>
  </Container>
);
