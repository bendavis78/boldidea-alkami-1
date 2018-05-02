/* global THREE */
function makeJasonMarker() {
    var geometry = new THREE.SphereGeometry(10, 75);
    geometry.position = new THREE.Vector3(40, 40, 40);
    var material = new THREE.MeshNormalMaterial();
    var jason = new THREE.Mesh(geometry, material);
    
    var marker = new THREE.Object3D();
    marker.jason = jason;
    return marker;
}