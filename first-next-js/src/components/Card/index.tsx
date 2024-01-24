import { ReactNode, CSSProperties } from "react";
import styled from "styled-components"

interface Props {
  children: ReactNode;
  display?: CSSProperties['display'];
  paddingLeft?: CSSProperties['paddingLeft'];
  paddingRight?: CSSProperties['paddingRight'];
  paddingTop?: CSSProperties['paddingTop'];
  paddingBottom?: CSSProperties['paddingBottom'];
  marginTop?: CSSProperties['marginTop'];
  marginBottom?: CSSProperties['marginBottom'];
  marginLeft?: CSSProperties['marginLeft'];
  marginRight?: CSSProperties['marginRight'];
}

const BaseCard = styled.div<Props>`
  display: ${(props) => props.display}
  padding-left: ${(props) => props.paddingLeft}
  padding-right: ${(props) => props.paddingRight}
  padding-top: ${(props) => props.paddingTop}
  padding-bottom: ${(props) => props.paddingBottom}
  margin-top: ${(props) => props.marginTop}
  margin-bottom: ${(props) => props.marginBottom}
  margin-left: ${(props) => props.marginLeft}
  margin-right: ${(props) => props.marginRight}
`;

const Card = ({ children, ...restProps } : Props) => {

  return (
    <BaseCard {...restProps}>
      {children}
    </BaseCard>
  )
}

export default Card





// import { Children, ReactNode } from "react";

// interface Props {
//   border: boolean;
//   children: ReactNode;
// }

// const Card = ({ border, children } : Props) => {

//   return (
//     <div className={`${border && 'rounded border-slate-600 border'} p-8`}>
//       {children}
//     </div>
//   )
// }

// export default Card