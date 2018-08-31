import * as React from 'react';
import styles from '../Example.module.scss';
import { IMainProps } from './IMainProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Config from '../Config/Config';
import Display from '../Display/Display';

export default class Main extends React.Component<IMainProps, {}> {
  public render(): JSX.Element {
    return (
      
     <div>
         {
           !this.props.needsConfiguration && <Config configureWebPart={this.props.configureWebPart}/>
         }

         {
           this.props.needsConfiguration && <Display name={this.props.name}/>
         }
     </div>
    );
  }
}
