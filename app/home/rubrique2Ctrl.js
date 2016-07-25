(function(){
	"use strict";
	angular
    .module("magraine")
    .controller("Rubrique2Ctrl", Rubrique2Ctrl);

	function Rubrique2Ctrl($scope, $timeout) { 
		var vm = this;
		
		vm.data = [4, 8, 15, 16, 23, 42];
		vm.createGraphique = createGraphique;
		$timeout(createGraphique, 500);
		
		
		function createGraphique(){
		console.log('toto');
		d3.selectAll("g").remove();
		
			var width = 420,
		    barHeight = 20;
		var x = d3.scaleLinear()
		    .domain([0, d3.max(vm.data)])
		    .range([0, width]);
		var chart = d3.select(".chart")
		    .attr("width", width)
		    .attr("height", barHeight * vm.data.length);
		var bar = chart.selectAll("g")
		    .data(vm.data)
		  .enter().append("g")
		    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
		bar.append("rect")
		    .attr("width", 	x)
		    .attr("height", barHeight - 1);
		bar.append("text")
		    .attr("x", function(d) { return x(d) - 3; })
		    .attr("y", barHeight / 2)
		    .attr("dy", ".35em")
		    .text(function(d) { return d; });
		} 
		
	}
	
})();