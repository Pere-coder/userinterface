import { AppProps } from 'next/app';
import RootLayout from '@/components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (

    
      <RootLayout>
        <div>
          <Component {...pageProps} />
        </div>
      
    </RootLayout>
  
    
  );
};

export default MyApp;
