import {
    Card, Container
} from 'react-bootstrap';
import routes from "../../routes/routes";
import {useTranslation} from "react-i18next";

const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
      <>
          <Container>
              <Card>
                  <Card.Body>
                      <Card.Text>{t('error.notFound')}</Card.Text>
                      <Card.Text>
                          {t('error.canGoTo')}
                          <Card.Link href={routes.root}>{t('error.mainPage')}</Card.Link>
                      </Card.Text>
                  </Card.Body>
              </Card>
          </Container>
      </>
    );
}

export default NotFoundPage;