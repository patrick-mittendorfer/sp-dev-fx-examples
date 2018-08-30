import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from '@microsoft/sp-webpart-base';

import * as strings from 'ExampleWebPartStrings';
import Main from './components/Main/Main';
import { IMainProps } from './components/Main/IMainProps';

export interface IExampleWebPartProps {
  name : string;
}

export default class ExampleWebPart extends BaseClientSideWebPart<IExampleWebPartProps> {

  constructor()
  {
    super();
    this.needsConfiguration = this.needsConfiguration.bind(this);
    this.configureWebPart = this.configureWebPart.bind(this);
  }

  private configureWebPart() : void
  {
    this.context.propertyPane.open();
  }

  private needsConfiguration() : boolean
  {
    if(this.properties.name)
    {
      return true;
    }
    return false;
  }

  public render(): void {

    //this.properties.needsConfiguration = true;
    const element: React.ReactElement<IMainProps > = React.createElement(
      Main,
      {
        needsConfiguration: this.needsConfiguration(),
        name : this.properties.name,
        configureWebPart : this.configureWebPart,
        
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('name', {
                  label: strings.DescriptionFieldLabel
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
