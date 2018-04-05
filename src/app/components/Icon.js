// import React from 'react';

// const req = require.context('../assets/icons', false, /^\.\/.*\.svg$/);
// const GLYPHS = (req.keys()).reduce((glyphs, key) => {
// 	const filename = key.match(new RegExp(/[^/]+(?=\.svg$)/))[0];
// 	return Object.assign({}, glyphs, { [filename]: req(key) });
// }, {});
// console.log(GLYPHS);
// const DEFAULT_CLASS = 'icon';

// const Icon = ({name = '', style = {}, className = ''}) => {
// 	const svgClasses = `${DEFAULT_CLASS} ${className}`;
// 	return (
// 		<svg className={svgClasses} style={style}>
// 			<use xlinkHref={GLYPHS[name]} />
// 		</svg>
// 	);
// };

// // Icon.propTypes = {
// // 	name: React.PropTypes.oneOf(Object.keys(GLYPHS)),
// // 	style: React.PropTypes.shape(),
// // 	className: React.PropTypes.string
// // };

// export default Icon;

import React, { PureComponent } from "react";

export default class Icon extends PureComponent {
    render() {
        const { className, glyph, ...restProps } = this.props;

        return (
            <svg className={className} {...restProps}>
                <use xlinkHref={`#${glyph}`} />
            </svg>
        );
    }
}

Icon.defaultProps = {
    glyph: "",
	className: "icon",
	width: "24",
	height: "24"
};
