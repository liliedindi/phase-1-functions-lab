function distanceFromHqInBlocks(someValue){
 return someValue>42? someValue-42 : 42-someValue
}

function distanceFromHqInFeet(someValue){
    return (someValue > 42 ? someValue - 42 : 42 - someValue) *264
}

function distanceTravelledInFeet(start, destination){
    let distance = (start> destination? start- destination:destination-start)
    return distance * 264
}
function calculatesFarePrice(start, destination){
    let fare
    if (((start > destination ? start - destination : destination - start) * 264)<=400){
       return fare =0
    } else if (((start > destination ? start - destination : destination - start) * 264) > 400 && ((start > destination ? start - destination : destination - start) * 264)<=2000){
        return fare = ((((start > destination ? start - destination : destination - start) * 264)-400)*2)/100
    } else if (((start > destination ? start - destination : destination - start) * 264) > 2000 && ((start > destination ? start - destination : destination - start) * 264)<=2500){
        return fare = 25
    }else {
        return "cannot travel that far"
    }
}