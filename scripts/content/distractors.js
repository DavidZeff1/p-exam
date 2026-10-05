// Only diagnose errors for choices whose numerical derivation is known.
// Other choices receive a targeted check, without inventing the student's reasoning.
export const distractors = {
 'f2-bayes-theorem:0': {
  0: '0.175 is the probability of a claim, the denominator. The question asks for the high-risk fraction within that claim population.',
  1: '0.250 is the prior high-risk proportion. A claim is new information, so the prior must be updated.',
  2: '0.400 is P(claim given high risk). The requested condition is reversed: P(high risk given claim).'
 },
 'f2-bayes-theorem:1': {0: '0.100 is the prior substandard proportion. Conditioning on death changes the class weights.'},
 'f2-bayes-theorem:2': {0:'0.078 is the joint probability of a legitimate claim and a flag. Divide by the legitimate-claim probability 0.95 to obtain the requested conditional probability.',2:'0.120 is the overall flag probability, not the flag probability conditional on legitimacy.'},
 'urv-g2-coinsurance:0': {0:'400 is the policyholder share of the excess. The question asks for the insurer payment.',1:'1500 results from applying 80% to the full loss and then subtracting the deductible. This contract applies the deductible first.',4:'2000 is the covered loss before the insurer share. Multiply it by 80%.'},
 'urv-g2-coinsurance:1': {2:'200 is the SD before coinsurance. Scale SD by 0.6; scale variance by 0.6 squared.',4:'300 is the scaled mean. The question asks for SD, not the mean.'},
 'urv-g2-coinsurance:2': {0:'2400 applies the cap before coinsurance. Here 3000 caps the final insurer payment.',2:'3200 is the uncapped payment. Apply the final payment cap of 3000.',3:'4000 is the deductible-adjusted loss before coinsurance and the cap.',4:'5000 is the original loss. All policy terms still need to be applied.'},
 'urv-a2-pdf:0': {0:'0.2500 uses only the interval-length ratio, which would work for a uniform density. This density decreases across its support.',4:'0.8750 is twice the normalized probability. First normalize the density over the full interval (0,4).'},
 'urv-a2-pdf:1': {0:'0.0156 is the unconditional probability of surviving beyond year 3. Divide by the probability of surviving beyond year 1.',4:'0.8750 is the complement of the requested conditional tail. The question asks for a claim after year 3.'},
};
