import AppDescription from "../../components/AppDescription/AppDescription";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

export default function HomePage() {
  const greetingsTitle = {
    color: "#007ba7",
  };
  return (
    <>
      <DocumentTitle>
        Welcome to <span style={greetingsTitle}>ContactBook App</span>
      </DocumentTitle>
      <div>
        <AppDescription />
      </div>
    </>
  );
}
