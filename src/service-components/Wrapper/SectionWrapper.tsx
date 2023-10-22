import styled from "styled-components";
import {StyledServiceWrapperType, WrapperChildren} from "../../service-types/types";



const StyledServiceWrapper = styled.div<StyledServiceWrapperType>`
  display: ${props => props._block ? 'block': 'flex'};
  gap: ${props => props.gap || '0px'};
  justify-content: ${props => props._justify || 'flex-start'};
  align-items: ${props => props.align_center};

  
  
  @media(max-width: 1200px){
    flex-wrap: wrap;
  }
  

`



function Wrapper({_justify, gap, align_center, _block, children}: WrapperChildren){

    return (
        <StyledServiceWrapper _block={_block} gap={gap} align_center={align_center} _justify={_justify}>
          {children}
        </StyledServiceWrapper>
    )
}

export default  Wrapper