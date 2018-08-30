import * as React from 'react';
import styles from '../Example.module.scss';
import { IConfigProps } from './IConfigProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Config extends React.Component<IConfigProps, {}> {
  public render(): JSX.Element {
    return (
     <div>
       <a href="#" onClick={this.props.configureWebPart} className={styles.button}>
         Web Parts needs configuration
        </a>
     </div>
    );
  }
}