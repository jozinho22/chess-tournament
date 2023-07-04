import { Button } from 'react-bootstrap';

const SideButton = ( {action, icon, type, title} ) => {

    let width = document.body.offsetWidth;

    return  <Button className={`${type}Button`} onClick={action}>
                <div className="Icon"> 
                    {icon} {width > 450 ? title : ""}
                </div>
            </Button>
}

export default SideButton;