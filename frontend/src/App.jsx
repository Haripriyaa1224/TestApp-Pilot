import {BrowserRouter, Routes, Route} from "react-router-dom"
import { FormProvider, UserProvider, ThemeProvider } from "./context"
import SignIn from "./components/SignIn"
import StudentDashboard from "./pages/StudentDashboard"
import TeacherDashboard from "./pages/TeacherDashboard"
import SetQuestions from "./pages/SetQuestions"
import TakeTest from "./pages/TakeTest"
import ViewPerformance from "./pages/ViewPerformance"
import Home from "./pages/Home"
import Register from "./components/Register"

function App() {
 

  return (
    <>
    <FormProvider>
      <UserProvider>
        <ThemeProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/teacher/questions" element={<SetQuestions />} />
      <Route path="/student/test" element={<TakeTest />} />
      <Route path="/student/performance" element={<ViewPerformance />} />
    </Routes>
    </BrowserRouter>
</ThemeProvider>
</UserProvider>
</FormProvider>
    
    </>
  )
}

export default App
