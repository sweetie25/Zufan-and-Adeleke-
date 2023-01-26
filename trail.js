/*
 * This is 'breakingRecords' function.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    let min =0;
    let max =0;
    
    let scoresMin;
    let scoresMax;
    
    for(const score of scores){
        if(scoresMax == null){
            scoresMax = score;
            scoresMin = score;
        }
        if(score > scoresMax){
            scoresMax = score;
            max +=1;
        }
        else if(score < scoresMin){
            scoresMin = score;
            min +=1;
        }
    }
    return[max, min]
    
    /* This is the Cats and a mouse function
     * The function is expected to return a string 
     * The function accepts integers as parameters
     */
    
    function catAndMouse(x, y, z) {
    let distOfCatAToMouse = Math.abs(z - x)
    let distOfCatBToMouse = Math.abs(z - y)
    
    if(distOfCatAToMouse > distOfCatBToMouse){
        return ('Cat B')
    }
    else if(distOfCatBToMouse > distOfCatAToMouse){
        return ('Cat A')
    }
    else {
        return ('Mouse C')
    }

}
    
