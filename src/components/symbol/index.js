const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('../../icons', false, /\.svg$/);
const icons = requireAll(req);
console.log(icons);
export default icons;