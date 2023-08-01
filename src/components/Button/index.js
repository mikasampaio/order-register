import React from "react";

import { Button as ContainerButtons} from "./styles";

function Button({children, ...props}) {
    return <ContainerButtons {...props} >{children}</ContainerButtons>
}

export default Button