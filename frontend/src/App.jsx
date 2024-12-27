import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignIn from "./pages/SignIn"
import StudentDashboard from "./pages/StudentDashboard"
import TeacherDashboard from "./pages/TeacherDashboard"
import SetQuestions from "./pages/SetQuestions"
import TakeTest from "./pages/TakeTest"
import ViewPerformance from "./pages/ViewPerformance"
import Home from "./pages/Home"

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/teacher/questions" element={<SetQuestions />} />
      <Route path="/student/test" element={<TakeTest />} />
      <Route path="/student/performance" element={<ViewPerformance />} />
    </Routes>
    </BrowserRouter>

    {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    </>
  )
}

export default App
