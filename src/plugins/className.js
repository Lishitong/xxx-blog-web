/*
 * @Author: lidalan
 * @Date: 2021-03-24 14:57:29
 * @LastEditors: lidalan
 * @LastEditTime: 2021-03-24 16:49:10
 * @Description:
 * @FilePath: \xxx-blog-web\src\plugins\className.js
 */

export default {
	install: (app, options) => {
		let rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
		const { globalProperties } = app.config;
		const utilsMap = {
			getClass: elem => {
				return (elem.getAttribute && elem.getAttribute('class')) || '';
			},
			hasClass: (elem, className) => {
				if (elem.nodeType !== 1) return;
				if (!className) return void 0;
				if (typeof className !== 'string') return utilsMap.getClass(elem);
				let curValue = utilsMap.getClass(elem);
				if (curValue.indexOf(className) > -1) {
					return true;
				}
				return false;
			},
			addClass: (elem, className) => {
				if (elem.nodeType !== 1) return;
				if (!className) return void 0;
				if (typeof className !== 'string') return utilsMap.getClass(elem);

				let curValue = utilsMap.getClass(elem);
				let cur = ' ' + stripAndCollapse(curValue) + ' ';
				let finalValue = '';

				if (cur.indexOf(' ' + className + ' ') < 0) {
					cur += ' ' + className;
				}

				finalValue = stripAndCollapse(cur);

				if (curValue !== finalValue) {
					elem.setAttribute('class', finalValue);
				}
			},
			removeClass: (elem, className) => {
				if (elem.nodeType !== 1) return;
				if (!className) return void 0;
				if (typeof className !== 'string') return utilsMap.getClass(elem);

				let curValue = utilsMap.getClass(elem);
				let cur = ' ' + stripAndCollapse(curValue) + ' ';
				let finalValue = '';

				if (cur.indexOf(' ' + className + ' ') > -1) {
					cur = cur.replace(' ' + className + ' ', ' ');
				}

				finalValue = stripAndCollapse(cur);

				if (curValue !== finalValue) {
					elem.setAttribute('class', finalValue);
				}
			},
		};
		mergeFn(globalProperties, utilsMap);

		app.provide(options.name || 'xxClassName', utilsMap);

		function mergeFn(target, source) {
			for (const key in source) {
				if (Object.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		function stripAndCollapse(value) {
			let tokens = value.match(rnothtmlwhite) || [];
			return tokens.join(' ');
		}
	},
};
