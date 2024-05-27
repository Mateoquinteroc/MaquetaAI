import Landingfondo from "/HOME.jpg"
const Fondo = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <img src={Landingfondo} className="w-[500px] max-w-screen-lg object-contain" />
        </div>
    )
}

export default Fondo 