import * as React from 'react';
import styles from '../Example.module.scss';
import { IDisplayProps } from './IDisplayProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Display extends React.Component<IDisplayProps, {}> {
  public render(): JSX.Element {
    return (
     <div>
         Your Name is {this.props.name}
     </div>
    );
  }
}