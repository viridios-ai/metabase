import styled from "@emotion/styled";
import { color } from "metabase/lib/colors";

export interface DownloadPopoverRootProps {
  isExpanded?: boolean;
}

export const DownloadPopoverRoot = styled.div<DownloadPopoverRootProps>`
  padding: 1rem;
  width: ${props => (props.isExpanded ? "18.75rem" : "16.25rem")};
`;

export const DownloadPopoverHeader = styled.div`
  padding: 0.5rem;
`;

export const DownloadPopoverMessage = styled.div`
  padding: 0 0.5rem;
`;

export const DownloadButtonRoot = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  :disabled {
    cursor: default;
    opacity: 0.7;
  }

  ${(props: any) =>
    !props.disabled &&
      `&:hover {
      background-color: ${color("brand")};
  }`}

  ${(props: any) =>
    props.disabled &&
    `@media (min-width: 512px) {
      &:hover .tooltip {
        visibility: visible;
      }
  }`}
`;

export const Tooltip = styled.div`
  visibility: hidden;
  width: 250px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 100;
  font-size: 12px;
`;

export const DownloadButtonText = styled.div`
  color: ${color("text-dark")};
  font-weight: bold;

  ${DownloadButtonRoot}:hover:not([disabled]) & {
    color: ${color("white")};
  }
`;
