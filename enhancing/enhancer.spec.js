const enhancer = require('./enhancer.js');
// test away!
const item = {
    name: "pants",
    durability: 16,
    enhancement: 5
}

describe("repair", () => {
    //act
    it("should repair item!", () => {
        const repaired = enhancer.repair(item)
        //assert
        expect(repaired.durability).toBe(100)
    })
})

describe("success", () => {
    //act
    it("should succeed in increasing enhancement!", () => {
        const enhanced = enhancer.success(item)
        let newVal = item.enhancement

        if (newVal < 20 ){
            newVal++;
        }
        
        //assert
        expect(enhanced.enhancement).toBe(newVal)
    })
})

describe("fail", () => {
    //act
    const newItem = {
        name: "Shirt",
        durability: Math.floor(Math.random() * 21),
        enhancement: Math.floor(Math.random() * 101)
    }
    const fail = enhancer.fail(newItem)
    it("should decrease durability!", () => {
        let newVal = { ...newItem };
        if (newItem.enhancement < 15){
            newVal.durability -= 5;
          }
          else{
              if(newItem.enhancement > 16){
                  newVal.enhancement--;
              }
           newVal.durability -= 10;
        }
        //assert
        expect(fail.durability).toBe(newVal.durability)
        expect(fail.enhancement).toBe(newVal.enhancement)
    })
})