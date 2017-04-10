function OpenUrl() {
	return{
		restrict: 'A',
		link: function(scope, element, attrs) {
			var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
      		elems.attr("target", "_blank");
		}
	};
}

export default OpenUrl;