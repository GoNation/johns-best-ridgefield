import { Box, Flex, Heading } from '@chakra-ui/react';
import MapSection from 'components/sections/MapSection';
import CustomForm from './common/CustomForm';
import HoursSection from 'components/sections/HoursSection';
import MinimalHours from 'components/MinimalHours';
import HoursByDay from 'components/HoursByDay';
import Address from 'components/Address';
import Phone from 'components/contact/Phone';
import HoursDisplay from 'components/hours/hoursDisplay';

const ContactPageLayout = ({ aboutData, fields, iframe, config, hideMap }) => {
  return (
    <Box>
      <Flex
        flexDir={['column', 'column', 'row', '', 'row']}
        py={[0]}
        align={['stretch', '', '', 'center']}
        backgroundColor={'secondary'}
        id="contact"
        flexWrap={'wrap'}
      >
        <Box
          p={4}
          display={'flex'}
          flexDir={'column'}
          justifyContent={'center'}
          alignItems={['center']}
          flex={1}
        >
          <Box>
            <CustomForm
              aboutData={aboutData}
              formName={config?.formName || 'contact'}
              fields={fields}
              config={config}
            />
          </Box>
        </Box>
        <Box flex={1} display={hideMap ? 'none' : 'block'}>
          {!hideMap && <MapSection aboutData={aboutData} iframeURL={iframe} />}
        </Box>
        <Box
          p={4}
          minW={500}
          width={'100%'}
          borderTop={'1px solid'}
          borderColor={'white'}
        >
          <HoursByDay hours={aboutData.hours} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactPageLayout;
