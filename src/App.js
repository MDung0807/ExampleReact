import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes'
function App() {
  return (
     <div>
       <Router>
        <Routes>
          {routes.map((page, index) =>{
            return (
              <Route
                key={index}
                path={page.path}
                element ={
                 <page.layout>
                  <page.component/>
                 </page.layout>
                }
            />
            )
          })}
        </Routes>
      </Router>

     </div>
  );
}

export default App;
