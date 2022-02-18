import { IconType } from "./icon.model";
import iconmoonConfig from '../../resources/fonts/iconmoon/selection.json';
import _ from 'lodash';

const Icon = ({ 
    name, 
    size,
    className,
    onClick
  }:IconType) => {
    
    const getIcon = (iconName: string) => {
        const icon = iconmoonConfig.icons.find(icon => icon.properties.name === iconName);
        
        if(!icon) {
            console.warn(`Icon ${iconName} does not exist.`);
            return null;
        }

        return icon.icon;
    }

    const icon = getIcon(name);

    if(!icon) return null;

    const { paths, attrs } = icon;

    const attributes = _.merge({}, ...attrs);
 

    return (
      <svg width={size} height={size} className={className} viewBox="0 0 1024 1024" onClick={onClick}>
        <path d={paths.join('')} {...attributes}></path>
      </svg>
      );

}

export default Icon;