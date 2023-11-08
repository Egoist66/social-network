import styled from "styled-components";
import {StyledServiceWrapperType, WrapperChildren} from "../../service-types/types";


const StyledServiceWrapper = styled.div<StyledServiceWrapperType>`
  display: ${props => props._block ? 'block' : 'flex'};
  gap: ${props => props.gap || '0px'};
  margin: ${props => props._margin};
  justify-content: ${props => props._justify || 'flex-start'};
  align-items: ${props => typeof (props.align_center) === 'boolean' && props.align_center ? 'center' : props.align_center};
  flex-direction: ${props => props._direction};


  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }


`


function Wrapper({_justify, _margin, _direction, gap, align_center, _block, children}: WrapperChildren) {

    return (
        <StyledServiceWrapper _margin={_margin} _direction={_direction} _block={_block} gap={gap}
                              align_center={align_center} _justify={_justify}>
            {children}
        </StyledServiceWrapper>
    )
}

export default Wrapper