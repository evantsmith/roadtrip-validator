console.log("connected");

var mainVue = new Vue({
    el: "#vue1",
    data: {
        numChips: 0,
        weightChips: "0",
        costChips: "0",

        numGas: 0,
        weightGas: "0",
        costGas: "0",

        numCans: 0,
        weightCans: "0",
        costCans: "0",

        numCandy: 0,
        weightCandy: "0",
        costCandy: "0",

        totMonSpent: 0,
        totMonRem: 200,
        totWeight: 0,
        totWeightRem: 200,

        isValid: true

    },
    methods: {
        // chips
        addChips: function(){
            mainVue.numChips++;

            mainVue.weightChips = parseFloat(Math.round((Number(mainVue.weightChips) + 0.53)*100)/100).toFixed(2);

            mainVue.costChips = parseFloat(Math.round((Number(mainVue.costChips) + 1.20)*100)/100).toFixed(2);

            mainVue.totMonSpent = parseFloat(Math.round((Number(mainVue.totMonSpent) + 1.20)*100)/100).toFixed(2);

            mainVue.totMonRem = parseFloat(Math.round((Number(mainVue.totMonRem) - 1.20)*100)/100).toFixed(2);

            mainVue.totWeight= parseFloat(Math.round((Number(mainVue.totWeight) + 0.53)*100)/100).toFixed(2);

            mainVue.totWeightRem = parseFloat(Math.round((Number(mainVue.totWeightRem) - 0.53)*100)/100).toFixed(2);
        },
        removeChips: function(){
            mainVue.numChips--;

            mainVue.weightChips = parseFloat(Math.round((Number(mainVue.weightChips) - 0.53)*100)/100).toFixed(2);
            mainVue.costChips = parseFloat(Math.round((Number(mainVue.costChips) - 1.20)*100)/100).toFixed(2);

            mainVue.totMonSpent = parseFloat(Math.round((Number(mainVue.totMonSpent) - 1.20)*100)/100).toFixed(2);
            mainVue.totMonRem = parseFloat(Math.round((Number(mainVue.totMonRem) + 1.20)*100)/100).toFixed(2);

            mainVue.totWeight= parseFloat(Math.round((Number(mainVue.totWeight) - 0.53)*100)/100).toFixed(2);
            mainVue.totWeightRem = parseFloat(Math.round((Number(mainVue.totWeightRem) + 0.53)*100)/100).toFixed(2);

        },

        // gas
        addGas: function(){
            mainVue.numGas++;

            mainVue.weightGas = parseFloat(Math.round((Number(mainVue.weightGas) + 22)*100)/100).toFixed(2);

            mainVue.costGas = parseFloat(Math.round((Number(mainVue.costGas) + 22.00)*100)/100).toFixed(2);

            mainVue.totMonSpent = parseFloat(Math.round((Number(mainVue.totMonSpent) + 22.00)*100)/100).toFixed(2);

            mainVue.totMonRem = parseFloat(Math.round((Number(mainVue.totMonRem) - 22.00)*100)/100).toFixed(2);

            mainVue.totWeight= parseFloat(Math.round((Number(mainVue.totWeight) + 22)*100)/100).toFixed(2);
            
            mainVue.totWeightRem = parseFloat(Math.round((Number(mainVue.totWeightRem) - 22)*100)/100).toFixed(2);
        },
        removeGas: function(){
            mainVue.numGas--;

            mainVue.weightGas = parseFloat(Math.round((Number(mainVue.weightGas) - 22)*100)/100).toFixed(2);
            mainVue.costGas = parseFloat(Math.round((Number(mainVue.costGas) - 22)*100)/100).toFixed(2);

            mainVue.totMonSpent = parseFloat(Math.round((Number(mainVue.totMonSpent) - 22)*100)/100).toFixed(2);
            mainVue.totMonRem = parseFloat(Math.round((Number(mainVue.totMonRem) + 22)*100)/100).toFixed(2);

            mainVue.totWeight= parseFloat(Math.round((Number(mainVue.totWeight) - 22)*100)/100).toFixed(2);
            mainVue.totWeightRem = parseFloat(Math.round((Number(mainVue.totWeightRem) + 22)*100)/100).toFixed(2);

        },

        // Cans of Soda
        addCan: function(){
            mainVue.numCans++;

            mainVue.weightCans = parseFloat(Math.round((Number(mainVue.weightCans) + 0.75)*100)/100).toFixed(2);

            mainVue.costCans = parseFloat(Math.round((Number(mainVue.costCans) + 0.80)*100)/100).toFixed(2);

            mainVue.totMonSpent = parseFloat(Math.round((Number(mainVue.totMonSpent) + 0.80)*100)/100).toFixed(2);

            mainVue.totMonRem = parseFloat(Math.round((Number(mainVue.totMonRem) - 0.80)*100)/100).toFixed(2);

            mainVue.totWeight= parseFloat(Math.round((Number(mainVue.totWeight) + 0.75)*100)/100).toFixed(2);
            
            mainVue.totWeightRem = parseFloat(Math.round((Number(mainVue.totWeightRem) - 0.75)*100)/100).toFixed(2);
        },
        removeCan: function(){
            mainVue.numCans--;

            mainVue.weightCans = parseFloat(Math.round((Number(mainVue.weightCans) - 0.75)*100)/100).toFixed(2);
            mainVue.costCans = parseFloat(Math.round((Number(mainVue.costCans) - 0.80)*100)/100).toFixed(2);

            mainVue.totMonSpent = parseFloat(Math.round((Number(mainVue.totMonSpent) - 0.80)*100)/100).toFixed(2);
            mainVue.totMonRem = parseFloat(Math.round((Number(mainVue.totMonRem) + 0.80)*100)/100).toFixed(2);

            mainVue.totWeight= parseFloat(Math.round((Number(mainVue.totWeight) - 0.75)*100)/100).toFixed(2);
            mainVue.totWeightRem = parseFloat(Math.round((Number(mainVue.totWeightRem) + 0.75)*100)/100).toFixed(2);

        },
        // candy
        addCandy: function(){
            mainVue.numCandy++;

            mainVue.weightCandy = parseFloat(Math.round((Number(mainVue.weightCandy) + 0.5)*100)/100).toFixed(2);

            mainVue.costCandy = parseFloat(Math.round((Number(mainVue.costCandy) + 1.25)*100)/100).toFixed(2);

            mainVue.totMonSpent = parseFloat(Math.round((Number(mainVue.totMonSpent) + 1.25)*100)/100).toFixed(2);

            mainVue.totMonRem = parseFloat(Math.round((Number(mainVue.totMonRem) - 1.25)*100)/100).toFixed(2);

            mainVue.totWeight= parseFloat(Math.round((Number(mainVue.totWeight) + 0.5)*100)/100).toFixed(2);
            
            mainVue.totWeightRem = parseFloat(Math.round((Number(mainVue.totWeightRem) - 0.5)*100)/100).toFixed(2);
        },
        removeCandy: function(){
            mainVue.numCandy--;

            mainVue.weightCandy = parseFloat(Math.round((Number(mainVue.weightCandy) - 0.5)*100)/100).toFixed(2);
            mainVue.costCandy = parseFloat(Math.round((Number(mainVue.costCandy) - 1.25)*100)/100).toFixed(2);

            mainVue.totMonSpent = parseFloat(Math.round((Number(mainVue.totMonSpent) - 1.25)*100)/100).toFixed(2);
            mainVue.totMonRem = parseFloat(Math.round((Number(mainVue.totMonRem) + 1.25)*100)/100).toFixed(2);

            mainVue.totWeight= parseFloat(Math.round((Number(mainVue.totWeight) - 0.5)*100)/100).toFixed(2);
            mainVue.totWeightRem = parseFloat(Math.round((Number(mainVue.totWeightRem) + 0.5)*100)/100).toFixed(2);

        },
        validate: function(){

            if((mainVue.totMonRem >= 0) && (mainVue.totWeight <= 200) ){
                var objToSend = {
                    chipsNum: mainVue.numChips,
                    gasNum: mainVue.numGas,
                    cansNum: mainVue.numCandy,
                    totalSpent: mainVue.totMonSpent,
                    totalWeight: mainVue.totWeight
                }
                console.log(objToSend);
                $.post('/validate-cargo', objToSend, function(data){
                    if(data === true){
                        alert("Cargo is Valid")
                    } else {
                        alert("something went wrong");
                    }
                })

            } else {

                if ((mainVue.totMonRem < 0) && (mainVue.totWeight > 200)) {
                    alert("Cargo costs too much and weighs too much")

                } else if(mainVue.totMonRem < 0){
                    alert("Cargo costs too much");
                } else if (mainVue.totWeight > 200){
                    alert("Cargo weighs too much");
                }

            };
        },
        valid: function() {
            console.log('hovering');
            if((mainVue.totMonRem >= 0) && (mainVue.totWeight <= 200) ){
                mainVue.isValid = true;
            } else {
                mainVue.isValid = false;
            }
        }
    }
})