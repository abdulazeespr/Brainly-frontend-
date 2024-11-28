import { Button } from "./componets/ui/Button"
import { PlusIcons } from "./icons/Plusicons"
import { Shareicons } from "./icons/Shareicons"


function App() {


  return (
      <div>

       <Button 
       title="Share Brain" 
       size="lg" 
       startIcons={<Shareicons size="lg"/>}
        variants="secondary"
       />
       
       <Button 
       title="Add Content" 
       size="lg" 
       startIcons={<PlusIcons size="lg"/>}
        variants="primary"
       />
      </div>
  )
}

export default App
