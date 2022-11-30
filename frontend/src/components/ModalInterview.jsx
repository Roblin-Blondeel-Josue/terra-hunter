import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: "80vh",
  bgcolor: "background.paper",
  overflowY: "scroll",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InterviewModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ padding: 0, color: "inherit" }} onClick={handleOpen}>
        Découvrez son interview ici.
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ borderBottom: "2px solid #FAF7FF" }}
          >
            Interview de Nayden Pokrovs :
          </Typography>
          <Typography
            variant="body2"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            I : Bonjour Mr.Pokrovs. Vous voulez bien vous presentez à nos
            lecteurs ? <br />
            NP: Bonjour à vous, je suis Nayden Pokrovs. J'ai 27 ans, et cela va
            faire déjà quatre ans que je suis Hunter, et quelques petites
            semaines que j'ai été promu Zodiac des Poissons. Devenir Hunter
            n'était pas mon rêve premier, disons que c'est la décision de mon
            grand frère, Zahari Pokrovs, qui m'a donné envie, quand j'étais
            jeune, de devenir Hunter à mon tour. J'ai passé plusieurs années de
            ma vie à m'entraîner, et l'Awakening m'est parvenu quand j'ai
            atteins mes vingt ans.
          </Typography>
          <Typography
            variant="body2"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            I: Je vois. Et quand à pensez vos proches ? C'est pas un choix de
            carriere facile. <br />
            NP: Au début, mes parents ont été réticents à l'idée que Zahari
            devienne un Hunter. Ils trouvaient cela trop dangereux, et
            craignaient plus que tout de le perdre. Ils n'étaient pas très
            familiers avec toute cette organisation à dire vrai. Ils ont fini
            par accepter à contrecoeur que mon frère le devienne, bien qu'il ne
            leur ait pas donné le choix. il rigole Ce fut un peu pareil pour
            moi, avec un peu plus de mécontentement vis à vis des parents, car
            leur deuxième fils avait envie de suivre également un parcours
            dangereux, et ça ne leur plaisait pas. Mais je me suis accroché,
            malgré le fait qu'ils m'entrainaient constamment dans des salons
            d'entreprise pour découvrir des métiers intéressants, ça ne m'a
            jamais tenté, donc j'ai continué mon entrainement pour arriver
            jusqu'à l'Awakening.{" "}
          </Typography>
          <Typography
            variant="body2"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            I: Cela pas être facile tout les jours. Avez des craintes au sujet
            du Futur ? <br />
            NP: Je pense que ma plus grande crainte actuellement, ce serait de
            ne pas être suffisamment puissant pour empêcher des ennemis
            d'anéantir ma famille. C'est pour protéger l'humanité, et plus que
            tout ma famille que j'ai décidé de faire ce métier, et maintenant
            que je suis à ce poste, je ressens d'autant plus la responsabilité
            de protéger la Terre. Ne pas y parvenir serait un échec sans nom.
            Mais je reste positif, et me dit que nous sommes douze à la protéger
            en Europe, douze super puissants en plus ! <br /> <br />I : Merci
            pour Monsieur Pokrovs
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
